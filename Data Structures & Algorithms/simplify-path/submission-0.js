class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const stack = [];
        const components = path.split('/');

        for (const dir of components) {
            if (dir === '' || dir === '.') {
                // Ignore empty segments (from multiple slashes) and current directory markers
                continue;
            } else if (dir === '..') {
                // Go up one level by popping from the stack if possible
                if (stack.length > 0) {
                    stack.pop();
                }
            } else {
                // Valid directory or file name
                stack.push(dir);
            }
        }

        // Reconstruct the canonical path
        return '/' + stack.join('/');
    }
}