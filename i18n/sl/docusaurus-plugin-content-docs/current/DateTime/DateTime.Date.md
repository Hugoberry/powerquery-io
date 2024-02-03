---
title: DateTime.Date
---

# DateTime.Date


## Description

Vrne komponento &#34;date&#34; navedene vrednosti &#34;date&#34;, &#34;datetime&#34; ali &#34;datetimezone&#34;.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Details

Vrne komponento "date" <code>dateTime</code>, dane vrednosti <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>.


## Examples

### Example #1 
Poiščite datumsko vrednost v &#34;#datetime(2010, 12, 31, 11, 56, 02)&#34;.
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
