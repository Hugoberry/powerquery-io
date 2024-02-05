---
title: Number.RoundDown
---

# Number.RoundDown


## Description

Returnerar föregående största heltal. Antalet decimaltal kan specificeras.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

Returnerar resultatet från att <code>number</code> avrundas nedåt till föregående största heltal. Om <code>number</code> är null returnerar den här funktionen null.    Om <code>digits</code> anges avrundas <code>number</code> till det angivna antalet decimaltal. 


## Examples

### Example #1 
Avrunda 1,234 nedåt till närmaste heltal.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Avrunda 1,999 nedåt till närmaste heltal.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
Avrunda 1 999 nedåt till två decimaler.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
