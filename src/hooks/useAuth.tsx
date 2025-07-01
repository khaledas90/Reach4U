"use client";

import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState<null>(null);
  const [loading, setLoading] = useState(true);
}
