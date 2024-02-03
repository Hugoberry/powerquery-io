---
title: Duration.From
---

# Duration.From


## Description

Mencipta tempoh daripada nilai yang ditentukan.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Mengembalikan nilai <code>tempoh</code> daripada <code>value</code> yang ditentukan. Jika <code>value</code> yang ditentukan adalah <code>nol</code>, <code>Duration.From</code> mengembalikan <code>nol</code>.  Jika <code>value</code> yang ditentukan ialah <code>tempoh</code>, <code>value</code> dikembalikan. Nilai bagi jenis berikut boleh ditukarkan kepada nilai <code>tempoh</code>:      <ul>        <li><code>teks</code>: Nilai <code>tempoh</code> daripada bentuk masa berlalu (d.h:m:s). Rujuk <code>Duration.FromText</code> untuk butiran.</li>        <li><code>nombor</code>: <code>tempoh</code> yang setara dengan bilangan hari penuh atau sebahagian yang dinyatakan oleh <code>value</code>.</li>      </ul>Jika <code>value</code> adalah daripada apa-apa jenis lain, ralat dikembalikan.


## Examples

### Example #1 
Menukar &lt;code&gt;2.525&lt;/code&gt; kepada nilai &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
