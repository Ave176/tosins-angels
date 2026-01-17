import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export interface Order {
  id?: string;
  user_id?: string;
  email: string;
  stripe_session_id: string;
  status: "pending" | "paid" | "shipped" | "delivered" | "cancelled";
  total: number;
  items: OrderItem[];
  shipping_address: ShippingAddress;
  created_at?: string;
  updated_at?: string;
}

export interface OrderItem {
  product_id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface ShippingAddress {
  name: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

// Order functions
export async function createOrder(order: Omit<Order, "id" | "created_at" | "updated_at">) {
  const { data, error } = await supabase
    .from("orders")
    .insert([order])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getOrderBySessionId(sessionId: string) {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("stripe_session_id", sessionId)
    .single();

  if (error && error.code !== "PGRST116") throw error;
  return data;
}

export async function getOrdersByEmail(email: string) {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("email", email)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}

export async function getOrdersByUserId(userId: string) {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}

export async function updateOrderStatus(orderId: string, status: Order["status"]) {
  const { data, error } = await supabase
    .from("orders")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", orderId)
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Auth functions
export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}
