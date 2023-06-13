export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      article: {
        Row: {
          article_image: string
          article_slug: string
          article_state: number | null
          article_title: string
          category_id: number
          created_at: string | null
          id: number
          markdown_text: string
          user_id: string | null
        }
        Insert: {
          article_image: string
          article_slug: string
          article_state?: number | null
          article_title: string
          category_id: number
          created_at?: string | null
          id?: number
          markdown_text: string
          user_id?: string | null
        }
        Update: {
          article_image?: string
          article_slug?: string
          article_state?: number | null
          article_title?: string
          category_id?: number
          created_at?: string | null
          id?: number
          markdown_text?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "article_article_state_fkey"
            columns: ["article_state"]
            referencedRelation: "state_publication"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "article_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "article_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      category: {
        Row: {
          category_name: string
          created_at: string | null
          id: number
        }
        Insert: {
          category_name: string
          created_at?: string | null
          id?: number
        }
        Update: {
          category_name?: string
          created_at?: string | null
          id?: number
        }
        Relationships: []
      }
      comment: {
        Row: {
          article_id: number
          comment_text: string
          created_at: string | null
          id: number
          user_id: string
        }
        Insert: {
          article_id: number
          comment_text: string
          created_at?: string | null
          id?: number
          user_id: string
        }
        Update: {
          article_id?: number
          comment_text?: string
          created_at?: string | null
          id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comment_article_id_fkey"
            columns: ["article_id"]
            referencedRelation: "article"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comment_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      level: {
        Row: {
          created_at: string | null
          description: string
          id: number
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: number
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: number
        }
        Relationships: []
      }
      likes: {
        Row: {
          article_id: number
          created_at: string | null
          id: number
          user_id: string
        }
        Insert: {
          article_id: number
          created_at?: string | null
          id?: number
          user_id: string
        }
        Update: {
          article_id?: number
          created_at?: string | null
          id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "likes_article_id_fkey"
            columns: ["article_id"]
            referencedRelation: "article"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "likes_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      related_articles: {
        Row: {
          article_id: number
          created_at: string | null
          id: number
          related_id: number
        }
        Insert: {
          article_id: number
          created_at?: string | null
          id?: number
          related_id: number
        }
        Update: {
          article_id?: number
          created_at?: string | null
          id?: number
          related_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "related_articles_article_id_fkey"
            columns: ["article_id"]
            referencedRelation: "article"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "related_articles_related_id_fkey"
            columns: ["related_id"]
            referencedRelation: "article"
            referencedColumns: ["id"]
          }
        ]
      }
      state_publication: {
        Row: {
          created_at: string | null
          id: number
          state: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          state?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          state?: string | null
        }
        Relationships: []
      }
      user_level: {
        Row: {
          created_at: string | null
          id: number
          level: number
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          level: number
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: number
          level?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_level_level_fkey"
            columns: ["level"]
            referencedRelation: "level"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_level_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
