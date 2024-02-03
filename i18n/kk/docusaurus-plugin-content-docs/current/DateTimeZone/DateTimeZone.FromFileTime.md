---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


## Description

64 биттік нөмірден күнді және уақыт белдеуін жасайды.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Details

<code>fileTime</code> мәнінен <code>күнуақытаймағы</code> мәнін жасайды және оны жергілікті уақыт белдеуіне түрлендіреді. Файл уақыты — Windows файл уақытының мәні, ол 00:00 түн ортасы, 1 қаңтар біздің заманымыздағы 1601 ж. күнінен бері өткен 100 наносекундтық аралықтардың санын білдіреді. (C.E.) Реттелген әмбебап уақыт (UTC).    


## Examples

### Example #1 
&lt;code&gt;129876402529842245&lt;/code&gt; күн және уақыт белдеуі мәніне түрлендіру.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
