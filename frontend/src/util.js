/** @format */

// util.js
// Alexander Vinnik
// 45970548

export { split_hash };

// split_hash - given a hash path like "#!/thing/99"
//   return an object with properties `path` ("thing") and `id` (99)
function split_hash(hash) {
  const regex = "#!/([^/]*)/?(.*)?";
  const match = hash.match(regex);
  if (match) {
    return {
      path: match[1],
      id: match[2],
    };
  } else {
    return { path: "" };
  }
}
