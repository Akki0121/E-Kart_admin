export async function fetchUsers() {
  const response = await fetch("/api/admin/users", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return response.json();
}
