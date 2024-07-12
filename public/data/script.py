import pandas as pd

# Function to remove duplicates based on 'code' column
def remove_duplicates(input_csv, output_csv):
    # Read the CSV file
    df = pd.read_csv(input_csv)
    
    # Remove duplicates based on 'code' column, keeping the first occurrence
    df_deduplicated = df.drop_duplicates(subset=['code'], keep='first')
    
    # Save the deduplicated DataFrame to a new CSV file
    df_deduplicated.to_csv(output_csv, index=False)

# Usage
input_csv = 'Nacional.csv'   # replace with your input file name
output_csv = 'output.csv' # replace with your desired output file name

remove_duplicates(input_csv, output_csv)

