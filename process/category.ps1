# Step 1: Read the JSON file and convert it
$jsonContent = Get-Content -Path "shared/_taxonomy.json" -Raw | ConvertFrom-Json

# Step 2: Access the specific part of the JSON object
$accessingDataFunctions = $jsonContent.'accessing-data functions'

# Step 3: Iterate through each key in this part of the JSON object
foreach ($key in $accessingDataFunctions.PSObject.Properties.Name) {
    # Extract the label (first part before the dot)
    $label = $key.Split('.')[0]

    # Construct the new JSON content
    $newJsonContent = @{
        label = $label
        link = @{
            type = "generated-index"
        }
    } | ConvertTo-Json

    # Step 4 & 5: Determine the folder path and create it if necessary
    $folderPath = "C:\git\hub\powerquery-io\docs\accessing-data\$label"
    if (-not (Test-Path $folderPath)) {
        New-Item -Path $folderPath -ItemType Directory
    }

    # Step 6: Save the new JSON file
    $newJsonContent | Out-File -FilePath "$folderPath\_category_.json"
}
