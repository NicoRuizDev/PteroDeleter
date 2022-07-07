module.exports = {
PTERODACTYL_URL: "https://panel.yourdomain.com", // Link to your Pterodactyl panel with protocol and without / at the end
PTERODACTYL_TOKEN: "", // Pterodactyl API key created in admin area with read & write perms for Users and Servers

SKIP_ADMIN_USERS: true, // Skip deleting of admin users in pterodactyl
SKIP_SERVERS_IDS: [], // UUIDs of servers that you don't want to delete for eg, ["UID", "UID", "UID"]
SKIP_USERS: [], // IDs of users which you don't want to delete and you don't want to delete servers owned by them too for eg, ["USERID", "USERID", "USERID"]
FETCH_LIMIT: 5000 // How much users/servers do you want to fetch and delete at once (it will be used when making request to pterodactyl api)
  
};