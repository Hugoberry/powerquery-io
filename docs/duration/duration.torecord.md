---
title: Duration.ToRecord
---

# Duration.ToRecord


Returns a record containing the parts of the duration.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Returns a record containing the parts the duration value, <code>duration</code>.  <ul>        <li><code>duration</code>: A <code>duration</code> from which the record is created.</li>      </ul>


## Examples

### Example #1 
Convert &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; into a record of its parts including days, hours, minutes and seconds if applicable.
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
