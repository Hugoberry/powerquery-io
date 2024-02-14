---
title: Date.AddQuarters
---

# Date.AddQuarters


Belirtilen çeyrekleri tarihe ekler.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

<code>numberOfQuarters</code> çeyreği <code>datetime</code> değeri olan <code>dateTime</code> öğesine eklemeden <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> sonucunu döndürür.      <ul>      <li><code>dateTime</code>: Çeyreklerin eklendiği <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      <li><code>numberOfQuarters</code>: Eklenecek çeyrek sayısı.</li>      </ul>


## Examples

### Example #1 
14/05/2011 tarihini temsil eden &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; veya &lt;code&gt;datetimezone&lt;/code&gt; değerine 1 çeyrek ekler.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
