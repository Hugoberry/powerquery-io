---
title: Usercube.Universes
---

# Usercube.Universes



## Syntax

```powerquery
Usercube.Universes(
    serverUrl as text
) as table
```


## Details

Provides data from a Usercube instance


## Examples

### Example #1 
Returns the universe data defined in the Usercube database.
```powerquery
Usercube.Universes("https://mycompany.usercube.com")
```

Result: 
```powerquery
Navigation table containing Usercube's universes
```



