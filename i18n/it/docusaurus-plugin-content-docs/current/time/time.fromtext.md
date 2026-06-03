---
title: Time.FromText
---

# Time.FromText


Crea un'ora da formati di ora locali, universali e personalizzati.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Crea un valore `time` da una rappresentazione testuale `text`. Per specificare proprietà aggiuntive, è possibile fornire un parametro facoltativo `record` `options`. Il `record` può contenere i campi seguenti:

-   `Format`: valore `text` che indica il formato da usare. Per maggiori informazioni, vedere: https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Se si omette questo campo o si specifica `Null` verrà eseguita l'analisi dell'ora nel miglior modo possibile.
-   `Culture`: se `Formato` non è Null, `Impostazioni cultura` controlla alcuni identificatori di formato. Ad esempio, in `"en-US"` `"tt"` è `"AM" o "PM"`, mentre in `"ar-EG"` `"tt"` è `"ص", o "م"`. Quando `Format` è `null`, `Culture` controlla il formato predefinito da usare. Quando `Culture` è `Null` od omesso, viene usato `Culture.Current`.

Per supportare i flussi di lavoro legacy, `options` può essere anche un valore di testo. Questo comportamento è identico a quello di `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Converte `"10:12:31am"` in un valore di ora.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Converte `1012` in un valore Time.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
Converte `10` in un valore Time.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
