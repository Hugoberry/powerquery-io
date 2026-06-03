---
title: DateTimeZone.From
---

# DateTimeZone.From


Crea un elemento datetimezone dal valore specificato.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Crea un elemento `datetimezone` dal valore specificato.

-   `value`: il valore usato per creare un elemento `datetimezone`.
-   `culture`: (opzione facoltativa) le impostazioni cultura da usare quando si trasformano i tipi di colonne (ad esempio, "en-US").

I valori dei tipi seguenti possono essere convertiti in un valore `datetimezone`:

-   `text`: restituisce un valore `datetimezone` dalla rappresentazione testuale. Per informazioni dettagliate, vedere `DateTimeZone.FromText`.
-   `date`: restituisce un elemento `datetimezone` con `value` come componente data, `12:00:00 AM` come componente ora e l'offset corrispondente al fuso orario locale.
-   `datetime`: restituisce un elemento `datetimezone` con `value` come valore datetime e l'offset corrispondente al fuso orario locale.
-   `datetimezone`: restituisce `value`.
-   `time`: restituisce un elemento `datetimezone` con l'equivalente data della data di automazione OLE di `0` come componente data, `value` come componente ora e l'offset corrispondente al fuso orario locale. La data di automazione OLE consiste in un numero a virgola mobile il cui componente integrale è il numero di giorni prima o dopo la mezzanotte del 30 dicembre 1899 e il cui componente frazionario rappresenta l'ora del giorno diviso per 24. Ad esempio, la mezzanotte del 31 dicembre 1899 è rappresentata da 1,0; 6.00, il 1° gennaio 1900 è rappresentato dal 2.25; la mezzanotte del 29 dicembre 1899 è rappresentata da -1,0; e 6.00, il 29 dicembre 1899 è rappresentato da -1,25. Il valore di base è mezzanotte del 30 dicembre 1899. Il valore minimo è mezzanotte del 1° gennaio 0100. Il valore massimo è l'ultimo momento del 31 dicembre 9999.
-   `number`: restituisce un elemento `datetimezone` con l'equivalente datetime della data di automazione OLE espressa da `value` e l'offset corrispondente al fuso orario locale.
-   `null`: restituisce `null`.

Se `value` è di qualsiasi altro tipo, viene restituito un errore.  
  
Il valore dell'offset corrispondente al fuso orario locale è diverso quando si esegue questa funzione localmente rispetto a quando la si esegue online. Quando viene eseguita localmente, viene restituito il fuso orario locale. Quando viene eseguita online, viene restituito il fuso orario UTC (+00:00).


## Examples

### Example #1
Converte la rappresentazione testuale di una data, un'ora e un fuso orario in un valore `datetimezone`.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Converte la rappresentazione testuale di una data, un'ora e un fuso orario in Portoghese brasiliano in un valore `datetimezone`.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Converte un numero che rappresenta il 1° gennaio 2025 alle 12:00 in un valore `datetimezone`. Il fuso orario nel risultato dipende dal fatto che l'esempio venga eseguito localmente o online.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
