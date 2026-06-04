---
title: Time.FromText
---

# Time.FromText


Kreira vreme iz lokalnih i univerzalnih i prilagođenih formata vremena.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Kreira `time` vrednost iz tekstualnog prikaza, `text`. Za određivanje dodatnih svojstava može se navesti opcionalni parametar `record`, `options`. `record` može da sadrži sledeća polja:

-   `Format`: Vrednost `text` koja označava format koji treba koristiti. Za više detalja, idite na https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Izostavljanje ovog polja ili obezbeđivanje `null` rezultiraće raščlanjivanjem vremena korišćenjem najboljeg napora.
-   `Culture`: Kada `Format` nije bez vrednosti, `Culture` kontroliše neke određivače formata. Na primer, u `"en-US"` `"tt"` je `"AM" ili "PM"`, dok je u `"ar-EG"` `"tt"` je `"ص" ili "م"`. Kada je `Format` `null`, `Culture` kontroliše podrazumevani format koji će se koristiti. Kada je `Culture` `null` ili izostavljen, koristi se `Culture.Current`.

Za podršku zastarelih tokova posla, i `options` može da bude tekstualna vrednost. Ovo ima isto ponašanje kao da je `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Konvertovanje `"10:12:31am"` u vrednost vremena.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Konvertovanje `"1012"` u vrednost vremena.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
Konvertovanje `"10"` u vrednost vremena.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
