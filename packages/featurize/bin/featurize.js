#!/usr/bin/env node

console.log(`🔧 FEATURIZE TOOL
Convert text into structured ML features

> Example:
$ featurize 'User clicked the ad 3 times'

Output:
{"action": "clicked", "object": "ad", "count": 3}
`);
