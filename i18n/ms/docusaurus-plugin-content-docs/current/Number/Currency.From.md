---
title: Currency.From
---

# Currency.From


## Description

Mengembalikan nilai mata wang daripada nilai yang ditentukan.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Mengembalikan nilai <code>mata wang</code> daripada <code>value</code> yang ditentukan. Jika <code>value</code> yang ditentukan ialah <code>nol</code>, <code>Currency.From</code> mengembalikan <code>nol</code>. Jika <code>value</code> yang ditentukan ialah <code>nombor</code> dalam julat mata wang, bahagian pecahan bagi <code>value</code> dibundarkan kepada 4 digit perpuluhan dan dikembalikan. Jika <code>value</code> adalah daripada apa-apa jenis lain, ia terlebih dahulu akan ditukarkan kepada <code>nombor</code> menggunakan <code>Number.FromText</code>. Julat yang sah untuk mata wang adalah <code>-922,337,203,685,477.5808</code> ke <code>922,337,203,685,477.5807</code>. Rujuk <code>Number.Round</code> untuk mod pembundaran yang tersedia. Lalai ialah <code>RoundingMode.ToEven</code>. <code>culture</code> pilihan juga mungkin diberikan (sebagai contoh, "en-US").


## Examples

### Example #1 
Dapatkan nilai &lt;code&gt;currency&lt;/code&gt; daripada &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Dapatkan nilai &lt;code&gt;currency&lt;/code&gt; daripada &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; dengan menggunakan &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
