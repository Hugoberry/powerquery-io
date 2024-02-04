---
title: Text.Format
---

# Text.Format


## Description

Devolve texto formatado a partir de uma cadeia de formato e argumentos.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Devolve texto formatado criado com a aplicação de <code>arguments</code> de uma lista ou registo a uma cadeia de formato <code>formatString</code>. Em alternativa, poderá ser especificada uma cultura. Pode também ser fornecida uma <code>culture</code> opcional (por exemplo, "en-US").


## Examples

### Example #1 
Formatar uma lista de números.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Formatar tipos de dados diferentes de um registo de acordo com a cultura Inglês dos Estados Unidos.
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
