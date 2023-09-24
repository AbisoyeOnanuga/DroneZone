import streamlit as st
import pandas as pd

# Read the JSON file into a pandas DataFrame
data = pd.read_json('D:\\Documents\\vscode\DroneZone\\src\\assets\\data\\droneData.json')

# Create a bar chart of the ratings of different drones
st.write("Bar chart of drone ratings")
st.bar_chart(data[['droneName', 'rating']], x='droneName', y='rating')
st.write("X-axis: Drone name")
st.write("Y-axis: Rating")