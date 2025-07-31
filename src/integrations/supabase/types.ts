export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      blood_requests: {
        Row: {
          blood_type: string
          contact_number: string
          created_at: string | null
          description: string | null
          hospital_address: string
          hospital_name: string
          id: string
          needed_by: string
          requester_id: string
          status: string | null
          units_needed: number
          updated_at: string | null
          urgency_level: string
        }
        Insert: {
          blood_type: string
          contact_number: string
          created_at?: string | null
          description?: string | null
          hospital_address: string
          hospital_name: string
          id?: string
          needed_by: string
          requester_id: string
          status?: string | null
          units_needed?: number
          updated_at?: string | null
          urgency_level: string
        }
        Update: {
          blood_type?: string
          contact_number?: string
          created_at?: string | null
          description?: string | null
          hospital_address?: string
          hospital_name?: string
          id?: string
          needed_by?: string
          requester_id?: string
          status?: string | null
          units_needed?: number
          updated_at?: string | null
          urgency_level?: string
        }
        Relationships: [
          {
            foreignKeyName: "blood_requests_requester_id_fkey"
            columns: ["requester_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_messages: {
        Row: {
          context_data: Json | null
          created_at: string | null
          id: string
          message: string
          message_type: string | null
          session_id: string | null
          user_id: string | null
        }
        Insert: {
          context_data?: Json | null
          created_at?: string | null
          id?: string
          message: string
          message_type?: string | null
          session_id?: string | null
          user_id?: string | null
        }
        Update: {
          context_data?: Json | null
          created_at?: string | null
          id?: string
          message?: string
          message_type?: string | null
          session_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      donor_predictions: {
        Row: {
          created_at: string | null
          frequency: number | null
          id: string
          monetary: number | null
          prediction_score: number | null
          recency: number | null
          time_since_last: number | null
          user_id: string | null
          will_donate_prediction: boolean | null
        }
        Insert: {
          created_at?: string | null
          frequency?: number | null
          id?: string
          monetary?: number | null
          prediction_score?: number | null
          recency?: number | null
          time_since_last?: number | null
          user_id?: string | null
          will_donate_prediction?: boolean | null
        }
        Update: {
          created_at?: string | null
          frequency?: number | null
          id?: string
          monetary?: number | null
          prediction_score?: number | null
          recency?: number | null
          time_since_last?: number | null
          user_id?: string | null
          will_donate_prediction?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "donor_predictions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      donors: {
        Row: {
          created_at: string | null
          frequency: number | null
          id: string
          is_available: boolean | null
          last_donation_date: string | null
          medical_notes: string | null
          monetary_donations: number | null
          recency: number | null
          times_donated: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          frequency?: number | null
          id?: string
          is_available?: boolean | null
          last_donation_date?: string | null
          medical_notes?: string | null
          monetary_donations?: number | null
          recency?: number | null
          times_donated?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          frequency?: number | null
          id?: string
          is_available?: boolean | null
          last_donation_date?: string | null
          medical_notes?: string | null
          monetary_donations?: number | null
          recency?: number | null
          times_donated?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "donors_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      emergency_requests: {
        Row: {
          blood_type: string
          contact_number: string
          created_at: string | null
          hospital_address: string
          hospital_name: string
          id: string
          patient_condition: string | null
          requester_id: string
          status: string | null
          units_needed: number
          updated_at: string | null
        }
        Insert: {
          blood_type: string
          contact_number: string
          created_at?: string | null
          hospital_address: string
          hospital_name: string
          id?: string
          patient_condition?: string | null
          requester_id: string
          status?: string | null
          units_needed?: number
          updated_at?: string | null
        }
        Update: {
          blood_type?: string
          contact_number?: string
          created_at?: string | null
          hospital_address?: string
          hospital_name?: string
          id?: string
          patient_condition?: string | null
          requester_id?: string
          status?: string | null
          units_needed?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "emergency_requests_requester_id_fkey"
            columns: ["requester_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          blood_type: string | null
          created_at: string | null
          email: string
          full_name: string
          id: string
          is_donor: boolean | null
          location: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          blood_type?: string | null
          created_at?: string | null
          email: string
          full_name: string
          id: string
          is_donor?: boolean | null
          location?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          blood_type?: string | null
          created_at?: string | null
          email?: string
          full_name?: string
          id?: string
          is_donor?: boolean | null
          location?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
