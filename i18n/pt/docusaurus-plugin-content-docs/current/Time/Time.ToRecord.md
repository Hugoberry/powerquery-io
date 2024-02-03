---
title: Time.ToRecord
---

# Time.ToRecord


## Description

Returns a record containing the Time value&#39;s parts.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

Returns a record containing the parts of the given Time value, <code>time</code>. <ul>        <li><code>time</code>: A <code>time</code> value for from which the record of its parts is to be calculated.</li>      </ul>


## Examples

### Example #1 
Convert the &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; value into a record containing Time values.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
