from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Set Chrome options to ignore SSL certificate errors
chrome_options = Options()
chrome_options.add_argument('--ignore-certificate-errors')
chrome_options.add_argument('--allow-insecure-localhost')
chrome_options.add_argument('--disable-web-security')

# Initialize the WebDriver with Chrome options
driver = webdriver.Chrome(options=chrome_options)

# Maximize the browser window
driver.maximize_window()

# Navigate to the target website
driver.get("https://www.traderjoes.com/home/products/category/food-8")

try:
    # Wait for the element to be clickable
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.LINK_TEXT, "Organic Turkey Bone Broth"))
    )
    
    # Scroll the element into view
    driver.execute_script("arguments[0].scrollIntoView(true);", element)
    
    # Use JavaScript to click the element
    driver.execute_script("arguments[0].click();", element)
    
    # Verify that the page has navigated (you can print the URL to verify)
    print("Current URL after clicking:", driver.current_url)

except Exception as e:
    # If there's any issue, print the error
    print("An error occurred:", e)

finally:
    # Close the browser after the test
    driver.quit()