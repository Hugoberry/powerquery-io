---
title: Text.Contains
---

# Text.Contains


Indique si le texte contient une sous-chaîne.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Détecte si `text` contient la valeur `substring`. Retourne true si la valeur est trouvée. Cette fonction ne prend pas en charge les caractères génériques ou les expressions régulières.  
  
L’argument facultatif `comparer` peut être utilisé pour spécifier des comparaisons non sensibles à la casse ou tenant compte de la culture et des paramètres régionaux. Les comparateurs intégrés suivants sont disponibles dans le langage de la formule :

-   `Comparateur.Ordinal` : Utilisé pour effectuer une comparaison ordinale sensible à la casse
-   `Comparer.OrdinalIgnoreCase` : Utilisé pour effectuer une comparaison ordinale non sensible à la casse
-   `Comparer.FromCulture` : Utilisé pour effectuer une comparaison tenant compte de la culture

Si le premier argument est null, cette fonction retourne null.  
  
Tous les caractères sont traités de manière littérale. Par exemple, "DR", "DR", "DR" et "DR" ne sont pas considérés comme égaux entre eux.


## Examples

### Example #1
Déterminez si le texte "Hello World" contient "Hello".
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Déterminez si le texte "Hello World" contient "hello".
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Recherchez si le texte "Hello World" contient "hello", à l'aide d'un comparateur insensible à la casse.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Rechercher les lignes d’une table qui contiennent soit "A-" ou "7" dans le code du compte.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = date, Sales = number],
    {
        {"US-2004", #date(2023,1,20), 580},
        {"CA-8843", #date(2023,7,18), 280},
        {"PA-1274", #date(2022,1,12), 90},
        {"PA-4323", #date(2023,4,14), 187},
        {"US-1200", #date(2022,12,14), 350},
        {"PTY-507", #date(2023,6,4), 110}
    }),
    #"Filtered rows" = Table.SelectRows(
        Source,
        each Text.Contains([Account Code], "A-") or
            Text.Contains([Account Code], "7"))
in
    #"Filtered rows"
    
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"CA-8843", #date(2023,7,18), 280},
    {"PA-1274", #date(2022,1,12), 90},
    {"PA-4323", #date(2023,4,14), 187},
    {"PTY-507", #date(2023,6,4), 110}
})
    
```




## Category
Text.Membership
