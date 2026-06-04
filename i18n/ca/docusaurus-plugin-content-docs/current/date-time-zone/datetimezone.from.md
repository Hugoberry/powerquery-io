---
title: DateTimeZone.From
---

# DateTimeZone.From


Crea un valor datetimezone a partir del valor donat.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Crea un `datetimezone` a partir del valor indicat.

-   `value`: El valor utilitzat per crear un `datetimezone`.
-   `culture`: (Opcional) La cultura que es farà servir en transformar el valor (per exemple, "en-US").

Els valors dels tipus següents es poden convertir en un valor `datetimezone`:

-   `text`: Retorna un `datetimezone` a partir de la representació textual. Consulteu `DateTimeZone.FromText` per obtenir més informació.
-   `data`: Retorna un `datetimezone` amb `value` com a component de data, `12:00:00 AM` com a component horari i el desplaçament corresponent al fus horari local.
-   `data i hora`: Retorna un `datetimezone` amb `value` com a data i el desplaçament corresponent al fus horari local.
-   `datetimezone`: Retorna `value`.
-   `hora`: Retorna un `datetimezone` amb l'equivalent de data de l'OLE Automation Date de `0` com a component de data, `value` com a component horari i el desplaçament corresponent al fus horari local. L'OLE Automation Date consisteix en un nombre de punt flotant el component integral del qual és el nombre de dies abans o després de la mitjanit, 30 de desembre de 1899 i el component fraccionat del qual representa el temps en aquest dia dividit per 24. Per exemple, mitjanit, 31 de desembre de 1899 està representat per 1.0; 6 a. m. l'1 de gener de 1900 està representat per 2,25; mitjanit, 29 de desembre de 1899 està representat per -1.0; i 6 A.M., 29 de desembre de 1899 està representat per -1,25. El valor base és la mitjanit, 30 de desembre de 1899. El valor mínim és a la mitjanit, 1 de gener de 0100. El valor màxim és el darrer moment del 31 de desembre de 9999.
-   `número`: Retorna un `datetimezone` amb l'equivalent de data i hora de l'OLE Automation Date expressada per `value` i el desplaçament corresponent al fus horari local.
-   `null`: Retorna `null`.

Si `value` és de qualsevol altre tipus, es retorna un error.  
  
El valor del desplaçament corresponent al fus horari local és diferent quan s'executa aquesta funció localment en comparació amb l'execució en línia. Quan s'executa localment, es retorna el fus horari local. Quan s'executa en línia, es retorna el fus horari UTC (+00:00).


## Examples

### Example #1
Converteix la representació textual d'una data, una hora i un fus horari en un valor `datetimezone`.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Converteix la representació textual d'una data de portuguès brasiler, una hora i un fus horari en un valor `datetimezone`.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Converteix un nombre que representa l'1 de gener de 2025 a les 12 de la tarda a un valor `datetimezone`. El fus horari del resultat depèn de si l'exemple s'executa localment o en línia.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
