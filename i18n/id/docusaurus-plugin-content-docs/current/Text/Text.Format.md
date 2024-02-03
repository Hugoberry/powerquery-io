---
title: Text.Format
---

# Text.Format


## Description

Menghasilkan teks terformat dari sebuah string format dan argumen.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Mengembalikan teks terformat yang dibuat dengan menerapkan <code>arguments</code> dari sebuah daftar atau catatan ke sebuah string format <code>formatString</code>. <code>culture</code> opsional juga dapat disediakan (misalnya, "en-US").


## Examples

### Example #1 
Format daftar angka.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Format jenis data yang berbeda dari catatan menurut budaya Bahasa Inggris AS.
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
