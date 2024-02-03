---
title: Text.Format
---

# Text.Format


## Description

Mengembalikan teks diformat daripada rentetan format dan argumen.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Mengembalikan teks diformatkan yang dicipta dengan menggunakan <code>arguments</code> daripada senarai atau rekod untuk rentetan format <code>formatString</code>. <code>culture</code> pilihan juga mungkin diberikan (contohnya, "en-US").


## Examples

### Example #1 
Format senarai nombor.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Format jenis data yang berbeza daripada rekod mengikut budaya Inggeris Amerika Syariket.
```powerquery
Text.Format(
    "The time for the #[distance] km run held in #[city] on #[date] was #[duration].",
    [
        city = "Seattle",
        date = #date(2015, 3, 10),
        duration = #duration(0, 0, 54, 40),
        distance = 10
    ],
    "en-US"
)
```

Result: 
```powerquery
"The time for the 10 km run held in Seattle on 3/10/2015 was 00:54:40."
```




## Category
Text.Conversions from and to text
