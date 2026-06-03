---
title: Web.Contents
---

# Web.Contents


Devolve os conteúdos transferidos a partir do URL como binário.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Devolve como binário o conteúdo transferido de `url`. Poderá ser fornecido um parâmetro de registo opcional, `options`, para especificar propriedades adicionais. O registo pode conter os campos seguintes:

-   `Query` : Adicione programaticamente parâmetros de consulta ao URL, sem ter de se preocupar com escapes.
-   `ApiKeyName` : Se o site de destino tiver uma noção de uma chave de API, este parâmetro pode ser utilizado para especificar o nome (não o valor) do parâmetro chave que é necessário utilizar no URL. O valor chave real é fornecido na credencial.
-   `Headers` : Especificar este valor como um registo vai fornecer cabeçalhos adicionais a um pedido HTTP.
-   `Timeout` : Especificar este valor como uma duração vai alterar o tempo limite para um pedido HTTP. O valor predefinido é de 100 segundos.
-   `ExcludedFromCacheKey` : Especificar este valor como uma lista vai excluir estas chaves de cabeçalho HTTP para que não façam parte do cálculo para colocar os dados em cache.
-   `IsRetry` : Especificar este valor lógico como verdadeiro vai ignorar qualquer resposta existente na cache ao obter os dados.
-   `ManualStatusHandling` : Especificar este valor como uma lista vai impedir qualquer processamento incorporado para pedidos HTTP cuja resposta tenha um destes códigos de estado.
-   `RelativePath` : Especificar este valor como texto acrescenta-o ao URL base antes de fazer o pedido.
-   `Content` : Especificar este valor altera o pedido Web de um GET para um POST, utilizando o valor da opção como conteúdo do POST.

O pedido HTTP é efetuado como GET (quando não é especificado nenhum Content) ou como POST (quando existe Content). Os pedidos POST só poderão ser efetuados anonimamente.  
  
Os cabeçalhos da resposta HTTP estão disponíveis como metadados no resultado binário. Fora do contexto de um conector de dados personalizado, apenas está disponível um subconjunto de cabeçalhos de resposta (por motivos de segurança).


## Examples

### Example #1
Obtenha os conteúdos de `"https://bing.com/search?q=Power+Query"` utilizando as opções RelativePath e Query. Estas opções podem ser utilizadas para consultar dinamicamente um URL base estático.
```powerquery
let
    searchText = "Power Query"
in
    Web.Contents(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
binary
```


### Example #2
Execute um POST num URL, ao passar um payload JSON binário e ao analisar a resposta como JSON.
```powerquery
let
    url = ...,
    headers = [#"Content-Type" = "application/json"],
    postData = Json.FromValue([x = 235.7, y = 41.53]),
    response = Web.Contents(
        url,
        [
            Headers = headers,
            Content = postData
        ]
    ),
    jsonResponse = Json.Document(response)
in
    jsonResponse
```

Result: 
```powerquery
table
```


### Example #3
Ligue-se a um URL seguro que aceite uma chave de autenticação como parte da respetiva cadeia de consulta. Em vez de fazer hard-coding da chave secreta em M (o que representaria um risco de segurança), a chave poderá ser fornecida em segurança ao especificar o respetivo nome (e não o respetivo valor) em M, ao escolher a autenticação da API Web e ao introduzir o valor da chave como parte da credencial da API Web. Quando utilizado desta forma, o exemplo seguinte gerará um pedido a `"https://contoso.com/api/customers/get?api_key=******"`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
