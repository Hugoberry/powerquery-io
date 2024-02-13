---
title: Essbase.Cubes
---

# Essbase.Cubes


Returns the cubes in an Essbase instance grouped by Essbase server.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Returns a table of cubes grouped by Essbase server from an Essbase instance at APS server <code>url</code>. An optional record parameter, <code>options</code>, may be specified to control the following options:    <ul><li><code>CommandTimeout</code> : A duration that controls how long the server-side query is allowed to run before it is canceled. The default value is ten minutes.</li></ul>



## Category
Accessing data
