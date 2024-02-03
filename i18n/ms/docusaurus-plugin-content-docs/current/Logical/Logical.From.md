---
title: Logical.From
---

# Logical.From


## Description

Mencipta logik daripada nilai yang ditentukan.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Mengembalikan nilai <code>logical</code> daripada <code>value</code> yang ditentukan. Jika <code>value</code> yang ditentukan ialah <code>null</code>, <code>Logical.From</code> mengembalikan <code>null</code>. Jika <code>value</code> yang diberikan ialah <code>logical</code>, <code>value</code> dikembalikan. Nilai daripada jenis berikut boleh ditukarkan kepada nilai <code>logical</code>:      <ul>        <li><code>text</code>: Nilai <code>logical</code> daripada nilai teks, sama ada <code>"true"</code> atau <code>"false"</code>. Lihat <code>Logical.FromText</code> untuk butiran.</li>        <li><code>number</code>: <code>false</code> jika <code>value</code> bersamaan dengan <code>0</code>, <code>true</code> sebaliknya.</li>      </ul>Jika <code>value</code> jika sebarang jenis lain, ralat dikembalikan.


## Examples

### Example #1 
Menukar &lt;code&gt;2&lt;/code&gt; kepada nilai &lt;code&gt;logical&lt;/code&gt;.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
