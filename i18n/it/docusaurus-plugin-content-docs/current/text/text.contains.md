---
title: Text.Contains
---

# Text.Contains


Restituisce un valore che indica se il testo contiene la sottostringa.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Rileva se `text` contiene il valore `substring`. Restituisce true se il valore viene trovato. Questa funzione non supporta caratteri jolly o espressioni regolari.  
  
L'argomento facoltativo `comparer` può essere usato per specificare confronti senza distinzione tra maiuscole e minuscole o sensibili alle impostazioni cultura e alle impostazioni locali. Nel linguaggio delle formule sono disponibili gli elementi comparer predefiniti seguenti:

-   `Comparer.Ordinal`: consente di eseguire un confronto ordinale con distinzione tra maiuscole e minuscole
-   `Comparer.OrdinalIgnoreCase`: consente di eseguire un confronto ordinale senza distinzione tra maiuscole e minuscole
-   `Comparer.FromCulture`: consente di eseguire un confronto sensibile alle impostazioni cultura

Se il primo argomento è Null, la funzione restituisce Null.  
  
Tutti i caratteri vengono trattati letteralmente. Ad esempio, "DR", " DR", "DR " e " DR " non sono considerati uguali tra loro.


## Examples

### Example #1
Trovare se il testo "Hello World" contiene "Hello".
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Trovare se il testo "Hello World" contiene "hello".
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Verificare se il testo "Hello World" contiene "hello", usando un operatore di confronto senza distinzione tra maiuscole e minuscole.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Trovare le righe in una tabella che contengono "A-" o "7" nel codice dell'account.
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
