class LRUCache {
    constructor(ttl) {
      this.ttl = ttl;
      this.cache = {};
      this.ageCounter = 0;
    }
  
    // O(1)
    proxy(key, func, ...args) {
      if (this.cache[key]) {
        return this.cache[key];
      } else {
        const result = func(...args);
        this.cache[key] = result;
        this.resetAgeCounter(key);
        return result;
      }
    }
  
    // O(N)
    resetAgeCounter(key) {
      this.ageCounter++;
      for (const cacheKey in this.cache) {
        if (cacheKey !== key) {
          this.cache[cacheKey].age++;
        }
        if (this.cache[cacheKey].age > this.ttl) {
          delete this.cache[cacheKey];
        }
      }
    }
  }
  