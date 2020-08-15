import pandas as pd


def get_title_list():
    csv_data = pd.read_csv("./app/static/webnovelList.csv", engine="python")
    return csv_data['title']


def get_content(title):
    csv_data = pd.read_csv("./app/static/webnovelList.csv", engine="python")
    str=""
    for i in range(len(csv_data['title'])):
        if csv_data['title'][i] == title:
            str += csv_data.loc[i, 'content']
    return str



# csv_data = pd.read_csv("../webnovelList.csv", engine="python")

# # print(csv_data.loc[0, 'content'])
# print(csv_data['title'])
        
# print(len(csv_data['title']))

# for i in range(len(csv_data['title'])):
#     if csv_data['title'][i] == '재혼 황후':
#         print(csv_data.loc[i, 'content'])