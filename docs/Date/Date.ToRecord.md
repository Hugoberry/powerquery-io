---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Returns a record containing parts of the date value.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Returns a record containing the parts of the given date value, <code>date</code>. <ul>        <li><code>date</code>: A <code>date</code> value for from which the record of its parts is to be calculated.</li>      </ul>


## Examples

### Example #1 
Convert the &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; value into a record containing parts from the date value.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
