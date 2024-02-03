---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


## Description

64 биттік нөмірден күнді және уақытты жасайды.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Details

<code>fileTime</code> мәнінен <code>datetime</code> мәнін жасайды және оны жергілікті уақыт белдеуіне түрлендіріледі. Файл уақыты — Windows файл уақытының мәні, ол 00:00 түн ортасы, 1 қаңтар біздің заманымыздағы 1601 ж. күніне бері өткен 100 наносекундтық аралықтардың санын білдіреді. (C.E.) Реттелген әмбебап уақыт (UTC).


## Examples

### Example #1 
&lt;code&gt;129876402529842245&lt;/code&gt; күн және уақыт мәніне түрлендіру.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
