---
title: DateTime.Time
---

# DateTime.Time


## Description

Vrne časovni del dane vrednosti &#34;datetime&#34;.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Vrne časovni del dane vrednosti "datetime", <code>dateTime</code>.


## Examples

### Example #1 
Poiščite časovno vrednost v &#34;#datetime(2010, 12, 31, 11, 56, 02)&#34;.
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
