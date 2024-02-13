---
title: Text.Format
---

# Text.Format


Retourne le texte mis en forme à partir d&#39;une chaîne de format et d&#39;arguments.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Remarks

Retourne le texte mis en forme qui est créé par l'application <code>arguments</code> d'une liste ou d'un enregistrement vers une chaîne de format <code>formatString</code>. Un <code>culture</code> facultatif peut éventuellement être fourni (par exemple, "fr-fr").


## Examples

### Example #1 
Formater une liste de numéros.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Formater différents types de données à partir d&#39;un enregistrement, en fonction de la culture anglaise des États-Unis.
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
