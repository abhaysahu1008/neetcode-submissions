class Twitter {
    constructor() {
        this.time = 0;
        this.tweets = new Map();   // userId -> Array<{ tweetId: number, time: number }>
        this.following = new Map(); // userId -> Set<followeeId>
    }

    /** 
     * Helper to get or initialize following set for a user (users follow themselves by default).
     */
    _getFollowing(userId) {
        if (!this.following.has(userId)) {
            this.following.set(userId, new Set([userId]));
        }
        return this.following.get(userId);
    }

    /** 
     * @param {number} userId 
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }
        // Prepend tweet so most recent tweets are at the beginning
        this.tweets.get(userId).unshift({ tweetId, time: this.time++ });
    }

    /** 
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const followees = this._getFollowing(userId);
        const candidates = [];

        // Collect up to top 10 most recent tweets from user + each followee
        for (const followeeId of followees) {
            const userTweets = this.tweets.get(followeeId);
            if (userTweets) {
                // Takes only the 10 most recent per followee to optimize sorting
                for (let i = 0; i < Math.min(10, userTweets.length); i++) {
                    candidates.push(userTweets[i]);
                }
            }
        }

        // Sort all candidates by timestamp descending and take the 10 most recent
        candidates.sort((a, b) => b.time - a.time);
        return candidates.slice(0, 10).map(item => item.tweetId);
    }

    /** 
     * @param {number} followerId 
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        this._getFollowing(followerId).add(followeeId);
    }

    /** 
     * @param {number} followerId 
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        // Users cannot unfollow themselves
        if (followerId !== followeeId) {
            this._getFollowing(followerId).delete(followeeId);
        }
    }
}