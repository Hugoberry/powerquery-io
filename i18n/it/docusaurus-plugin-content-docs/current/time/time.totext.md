---
title: Time.ToText
---

# Time.ToText


Restituisce una rappresentazione testuale del valore di ora.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Restituisce una rappresentazione testuale di `time`. Per specificare proprietà aggiuntive, è possibile fornire un parametro facoltativo `record` `options`. `culture` è usato solo per i flussi di lavoro legacy. Il `record` può contenere i campi seguenti:

-   `Format`: valore `text` che indica il formato da usare. Per maggiori dettagli, vedere: https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Se si omette questo campo o si specifica `Null`, verrà eseguita la formattazione della data usando l'impostazione predefinita, definita da `Culture`.
-   `Culture`: se `Formato` non è Null, `Impostazioni cultura` controlla alcuni identificatori di formato. Ad esempio, in `"en-US"` `"tt"` è `"AM" o "PM"`, mentre in `"ar-EG"` `"tt"` è `"ص", o "م"`. Quando `Format` è `null`, `Culture` controlla il formato predefinito da usare. Quando `Culture` è `Null` od omesso, viene usato `Culture.Current`.

Per supportare flussi di lavoro legacy `options` e `culture` possono essere anche valori di testo. Questo ha lo stesso comportamento di `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Convertire `#date(01, 30, 25)` in un valore `text`. *L'output dei risultati può variare a seconda delle impostazioni cultura correnti.*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
Eseguire la conversione usando un formato personalizzato e le impostazioni cultura tedesche.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
Eseguire la conversione usando il formato dell'ora solare.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
