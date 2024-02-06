---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Returns a record containing the datetime value&#39;s parts.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Returns a record containing the parts of the given datetime value, <code>dateTime</code>. <ul>        <li><code>dateTime</code>: A <code>datetime</code> value for from which the record of its parts is to be calculated.</li>      </ul>


## Examples

### Example #1 
Convert the &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; value into a record containing Date and Time values.
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
