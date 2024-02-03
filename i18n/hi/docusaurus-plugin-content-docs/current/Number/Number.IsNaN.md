---
title: Number.IsNaN
---

# Number.IsNaN


## Description

अगर मान NaN (कोई संख्या नहीं) है, तो संकेत देता है.


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

अगर मान NaN (कोई संख्या नहीं) है, तो संकेत देता है. अगर <code>number</code>, <code>Number.IsNaN</code> के बराबर है, तो <code>true</code> अन्यथा <code>false</code> लौटाता है.


## Examples

### Example #1 
जाँचें कि क्या 0 को 0 से भाग करने पर NaN आता है.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
जाँचें कि क्या 1 को 0 से भाग करने पर NaN आता है.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
