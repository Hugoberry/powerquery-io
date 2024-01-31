# Function to flatten the Documentation branch of the JSON
function Flatten-Documentation {
    param (
        [Parameter(Mandatory=$true)]
        [psobject]$Json,

        [Parameter(Mandatory=$true)]
        [string]$ParentKey = ''
    )

    $result = [ordered]@{}

    foreach ($key in $Json.PSObject.Properties.Name) {
        $newKey = $ParentKey + $key
        $value = $Json.$key

        if ($value -is [System.Collections.IEnumerable] -and $value -isnot [string]) {
            for ($i = 0; $i -lt $value.Count; $i++) {
                $subItem = $value[$i]
                if ($subItem -is [System.Collections.IEnumerable] -and $subItem -isnot [string]) {
                    $nestedResults = Flatten-Documentation -Json $subItem -ParentKey "$newKey`_$i`_"
                    foreach ($nestedKey in $nestedResults.Keys) {
                        $result["$nestedKey"] = $nestedResults[$nestedKey]
                    }
                } elseif ($subItem -is [pscustomobject]) {
                    # Handle pscustomobject within the array
                    foreach ($subItemKey in $subItem.PSObject.Properties.Name) {
                        $subItemValue = $subItem.$subItemKey
                        $result["$newKey`_$i`_$subItemKey"] = @{ "message" = $subItemValue }
                    }
                } else {
                    $result["$newKey`_$i"] = @{ "message" = $subItem }
                }
            }
        } elseif ($value -is [pscustomobject]) {
            $subResults = Flatten-Documentation -Json $value -ParentKey "$newKey`_"
            foreach ($subKey in $subResults.Keys) {
                $result["$subKey"] = $subResults[$subKey]
            }
        } else {
            $result[$newKey] = @{ "message" = $value }
        }
    }

    return $result
}


# Read the JSON file
$jsonContent = Get-Content 'original.json' | ConvertFrom-Json

# Flatten the Documentation branch of each function
$flattenedJson = [ordered]@{}
foreach ($function in $jsonContent.functions) {
    $documentation = $function.Documentation
    if ($documentation) {
        $tempResult = Flatten-Documentation -Json $documentation -ParentKey "$($function.Name)_"
        foreach ($key in $tempResult.Keys) {
            $flattenedJson[$key] = $tempResult[$key]
        }
    }
}

# Convert to JSON and save to a file
$flattenedJson | ConvertTo-Json -Depth 100 | Out-File 'flattened.json'
# debug the output
#$flattenedJson.GetEnumerator() | Sort-Object Key | Select-Object -First 30

