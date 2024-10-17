// Import the Node-Cache module
const NodeCache = require("node-cache");

// Create a new cache instance with default options
const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

// Function to set a value in the cache
function setCache(key, value, ttl) {
  // ttl is optional; it overrides the default stdTTL if provided
  const success = cache.set(key, value, ttl);
  if (success) {
    console.log(`Cache set: { ${key}: ${value} }`);
  } else {
    console.log(`Failed to set cache for key: ${key}`);
  }
}

// Function to get a value from the cache
function getCache(key) {
  const value = cache.get(key);
  if (value === undefined) {
    console.log(`Cache miss for key: ${key}`);
    return null;
  } else {
    console.log(`Cache hit: { ${key}: ${value} }`);
    return value;
  }
}

// Function to delete a value from the cache
function deleteCache(key) {
  const success = cache.del(key);
  if (success) {
    console.log(`Cache deleted for key: ${key}`);
  } else {
    console.log(`No cache entry found for key: ${key}`);
  }
}

// Example usage
const key = "user_123";
const userData = { name: "Alice", age: 30 };

// Set cache without custom TTL (uses default stdTTL of 100 seconds)
setCache(key, userData);

// Get cache
const cachedData = getCache(key);
console.log("Retrieved Data:", cachedData);

// Set cache with custom TTL of 50 seconds
setCache(key, userData, 50);

// Delete cache
deleteCache(key);

// Attempt to get deleted cache
getCache(key);
