
let products = [
            {
                name: "Product Name 1",
                price: "20rs",
                description: "white color pencil",
                image: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            },
            {
                name: "Product Name 2",
                price: "40rs",
                description: "red color pencil",
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAABGlBMVEX////MAADDHyW9AADCJCbGHiXOLym3AADPAADtxMTNExvz4eDCGSLFEh/uz8u6AAD38O7RMSXEAADFIyzKJye+FxT79vXQAAjNGSLnvru6AAfkxMPbAADy3NzilJPPODHRbnHRQzzhqanIPjvEP0H06OjZi477+fHy+NLbtZPTiHH8//HOX2HBNTnNJB7XhIbYqZXGXkfgwpju5tzfmpvkyarRgWXl0Kbk3avUjYHftazOZlXId1fETUjOknnOnYPPcWDFd2XapoTMc2zPlofIZWDOp4rMf3nWU0fWnZjOXFTepI3UU1LZa2Tim5Lu4sXfnUzhyXPhrVjRWTbcm1f189vcs1DPi1jizYXkxYfcg0TftGrhMSfZczl0RMPoAAAEFklEQVRogcXbi17iOBgF8N5SMSSAQrexiky5qCCgOCwjsrSIA4MUdYZ19jr7/q+xX3DXRzjJC/x/JzltEi6WZWC0qiZUPUq+fWpIrvGDww8m5FbMDyrMNWCT7PvMYYd1E3KFZEc2wHLJ1zIj2fsJK7fCw7fMQa+ElUv26Z0vtdxsYeVW/+z8ol02IOf7p/lO+7IrZQ8uXxWuB3f1SHrgdW7ZZ+c3g491VwqwnLeHhUG7PnTh3W7Zw48/j47rLr5h9nD/0+3l0IDcPy2MR3cmMqur6qStG4Ze53wlLFz8omX0ezvPud+/sYYub8Bl5VdkuRsFTfRs87f9WQZTtKx2suMFU3C3qxUeJw2hZXRmn9fSdCW8oAluWJVruSfxcj7ktSwtU+YpXo4zWmgv6ILXmWb7oDNrSi+Cy4pme0BysIbLyu+kU4lf5ypX/fukoWUsbFWp28lO7sJlFS9JZtECPdsh7VWzhnTwst6rHCmcQ7hM3d7d6OCZC9Rt5ZDM11hYd7vSWQvHidDdLuSUr+b3shIt0LLutlOWzH3Ar/OuYcz9AJf1U0UNc+GzzXlll9nAOvPa55lgAp85x+M0aTDPfYDLyk9S2qvcL2hZnwAnRmQ69WbLjRFZVeZJ2YzcuN6ts4GGNcYpZS4akFezpc58hpf9wT3JRbR8rPcqSbcbeOb93V7FGL7b++HbLmlE7jP9aUURLufojkHnMM8dwmW1Wo1oryrC5VDxJC0Lx33Ey6snbyq8IlzmqlZb0v0ZL9NsT+6lwL/DjnKKZ9MePc/wzLYKk7mJ2T6yVTwSTSngmY9CVSuna+nsob8GJpm36bzt4Gc7VPF0smbOnoF15p2ES7xct5ViwZQZWGeS9V1SFPEyX8f6m28D3eZPSeKZkdWX+UNP4OUc715PFgIvU7c32eEjNyDnOOedx0hEBrq9mTW6UkRHaDnHn9ad57Io3qFleqpmS71LojPfhSrMFuMy/h1Wt/lT5o6lKKIzkxxfi8zFN4ye51jOHg10m2R+3V4EIjAw2003W0uxdwyX6dSbNKnbeJkalm7K+MyPdDLwZlNqGDwzvT0/L2m2AwPrHK8TeofhM9ucJ5MpZS7g5W4a0DV2Dy1TwxrZ/IELFy0/U+Zm2ozws/1M3R6PIkd4+MxKzdqSmchM9yq5dkSA/tn8c44pxhxhRNYfezoiQsuZzRTd5wzIL6GebIdJDy1fflWaNiBb37a/KgptQL7dbl9jYSLzxW9bsn0Z5NHydy1vt19/B//00bLOv21fNf0JDVvWH7vM2xe8fLvL/Oc5Xn7Zvr4aiWy1/iL57+8GZGv148c/NwYm27KuTsIc+jr3NuonJxv4w7wbhdwJ+vu5/0bJr6HPYP+PzRP4563v4xT+H7r3Ad+m3se/FUSOzFsAsoMAAAAASUVORK5CYII="
            },
            {
                name: "Product Name 3",
                price: "30rs",
                description: "black color pencil",
                image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwAgAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBAwIEBQj/xAAwEAABAwMDAwQCAQIHAAAAAAABAAIDBAURBiExEkFRBxNCYRQiMiPwFSQzUnGBwf/EABYBAQEBAAAAAAAAAAAAAAAAAAABA//EABgRAQADAQAAAAAAAAAAAAAAAAABAjER/9oADAMBAAIRAxEAPwC8UREBERAREQEREBERAREQERQv1A1xBpulfT0skbrkWdR6t207Tw94HJPxby4/QJATBs0bpHxte0vZjqaHbtzxkdlsXz16b1V7uusWXGCqmhpQ8mpMh6nVWeevy47fTcADjC+g2Z6RnnCDkiIgIiICIiAiIgIiICHZFCPUTXcGmqaWlpJIzcS0FznDqbTtPBI7uPxb35OBug7+q9SSUchtln9uS5uaDI94zHRsccB7/s/FnLj9AlUxfrILxqSOnoKypq2D9qsy4JNRnDyXDk4xn/b/ABHGB27DerleqH8K1009LUVD3fl1pnL3zZO5zgfu4YBPADQGhva1tF6RprLSRkxt6w0duFNGNEaWis1GwuaOvHhS9YAwsqgiIgIiICIiAiIgIigPqL6gU9ggloqGUGuAAlkA6hT5GwA+UhHDe38nYHIbPUXXlPpymlpKORrrhgdbsdQpweNvk8/Fv/ZwFT1HRT6xrKcRU0jY2udJJLK/qkkkdjqJPfjnk/WwGu0Wir1hcIZDBKxgLjIXSl/W5ziS7J+RGMu7/QwBfek9MUtlpGNbGOvHhTRq0hpWmstK3+m33MDfClI2QIqCIiAiIgIiICIiAiKBa91t/h4mttplDalg/wA1V4y2kB7DzJuNu2QSDkNcGr1I1/FYoJaG2zD80DpmmaA72M8NaOHSkbgcAfs7bANW2y0Tavr4WU8D20UT3OEsgzJK527iXbnc8nO5ye642XT02rbuySKORtFHkAvJJeScuO5OSSd3cuxkq+9N6fprNSMjiYA4DnCmjVpfTdNZaRjI2APA8KQIioIiICIiAiIgIiICLBOFXeu9a+3+Ra7NUe0YgRW1zcH8cd2s8v33PDOTvgIM+omuXW+mrKOy+4+anaBV1UQz7GeGN7e4c99mjc9ga10/YqrV1VG1sL4bWw5DXEl0pJyS49/vyd+SV2dO2Kr1ZURwtbIyzRSEsDtjN+xOT3xk533J3cScYvGxWamtNKyKFjRgAbBTRr0/Y6az0jIoYwCB2C9hEVBERAREQEREBERAWCcITgKpvUz1GZTxy260TO6QTHNUROw57hzHGe2Pk/48DLuA9LXWtg1s1Ba6kwwRO9utuDNxEe8bDx1+T8eP5EBQXTGnqnVtTGDE+GzRP6o4t/6p2/Y53wcZ8+ckknhorS9x1S+mluLGRW+EARwRM6GOAJIJH11Ef2Sb3tVsgttM2KFgAaMcKDhZrTT2umZFAwNwPC9FEVBERAREQEREBERAWCccrKh+u9TT2uKO3WeA1V2qv9KIcMb3e89h/wA9/KDlq67tfDLQQyOa17S2V7XFpAI4BG4KgFr9PqO83iGsEcjaWJoaInHLMDgDwB44Uws+namvcye5gDuWAkjP/qm1LSxU0QZE0NA8LOKzM9lpa1echqt1vhoKdsULA0Adl3ERaMxERAREQEREBERAREQYPC89tppvypKkxNEspBe/G7sDAyfpeiiDi1oaMNGAuSIgIiICIiAiIgIiICIiAiIg/9k="
            },
            {
                name: "Product Name 4",
                price: "50rs",
                description: "white color pencil",
                image: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            },
             {
                name: "Product Name 1",
                price: "20rs",
                description: "white color pencil",
                image: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            },
            {
                name: "Product Name 2",
                price: "40rs",
                description: "red color pencil",
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAABGlBMVEX////MAADDHyW9AADCJCbGHiXOLym3AADPAADtxMTNExvz4eDCGSLFEh/uz8u6AAD38O7RMSXEAADFIyzKJye+FxT79vXQAAjNGSLnvru6AAfkxMPbAADy3NzilJPPODHRbnHRQzzhqanIPjvEP0H06OjZi477+fHy+NLbtZPTiHH8//HOX2HBNTnNJB7XhIbYqZXGXkfgwpju5tzfmpvkyarRgWXl0Kbk3avUjYHftazOZlXId1fETUjOknnOnYPPcWDFd2XapoTMc2zPlofIZWDOp4rMf3nWU0fWnZjOXFTepI3UU1LZa2Tim5Lu4sXfnUzhyXPhrVjRWTbcm1f189vcs1DPi1jizYXkxYfcg0TftGrhMSfZczl0RMPoAAAEFklEQVRogcXbi17iOBgF8N5SMSSAQrexiky5qCCgOCwjsrSIA4MUdYZ19jr7/q+xX3DXRzjJC/x/JzltEi6WZWC0qiZUPUq+fWpIrvGDww8m5FbMDyrMNWCT7PvMYYd1E3KFZEc2wHLJ1zIj2fsJK7fCw7fMQa+ElUv26Z0vtdxsYeVW/+z8ol02IOf7p/lO+7IrZQ8uXxWuB3f1SHrgdW7ZZ+c3g491VwqwnLeHhUG7PnTh3W7Zw48/j47rLr5h9nD/0+3l0IDcPy2MR3cmMqur6qStG4Ze53wlLFz8omX0ezvPud+/sYYub8Bl5VdkuRsFTfRs87f9WQZTtKx2suMFU3C3qxUeJw2hZXRmn9fSdCW8oAluWJVruSfxcj7ktSwtU+YpXo4zWmgv6ILXmWb7oDNrSi+Cy4pme0BysIbLyu+kU4lf5ypX/fukoWUsbFWp28lO7sJlFS9JZtECPdsh7VWzhnTwst6rHCmcQ7hM3d7d6OCZC9Rt5ZDM11hYd7vSWQvHidDdLuSUr+b3shIt0LLutlOWzH3Ar/OuYcz9AJf1U0UNc+GzzXlll9nAOvPa55lgAp85x+M0aTDPfYDLyk9S2qvcL2hZnwAnRmQ69WbLjRFZVeZJ2YzcuN6ts4GGNcYpZS4akFezpc58hpf9wT3JRbR8rPcqSbcbeOb93V7FGL7b++HbLmlE7jP9aUURLufojkHnMM8dwmW1Wo1oryrC5VDxJC0Lx33Ey6snbyq8IlzmqlZb0v0ZL9NsT+6lwL/DjnKKZ9MePc/wzLYKk7mJ2T6yVTwSTSngmY9CVSuna+nsob8GJpm36bzt4Gc7VPF0smbOnoF15p2ES7xct5ViwZQZWGeS9V1SFPEyX8f6m28D3eZPSeKZkdWX+UNP4OUc715PFgIvU7c32eEjNyDnOOedx0hEBrq9mTW6UkRHaDnHn9ad57Io3qFleqpmS71LojPfhSrMFuMy/h1Wt/lT5o6lKKIzkxxfi8zFN4ye51jOHg10m2R+3V4EIjAw2003W0uxdwyX6dSbNKnbeJkalm7K+MyPdDLwZlNqGDwzvT0/L2m2AwPrHK8TeofhM9ucJ5MpZS7g5W4a0DV2Dy1TwxrZ/IELFy0/U+Zm2ozws/1M3R6PIkd4+MxKzdqSmchM9yq5dkSA/tn8c44pxhxhRNYfezoiQsuZzRTd5wzIL6GebIdJDy1fflWaNiBb37a/KgptQL7dbl9jYSLzxW9bsn0Z5NHydy1vt19/B//00bLOv21fNf0JDVvWH7vM2xe8fLvL/Oc5Xn7Zvr4aiWy1/iL57+8GZGv148c/NwYm27KuTsIc+jr3NuonJxv4w7wbhdwJ+vu5/0bJr6HPYP+PzRP4563v4xT+H7r3Ad+m3se/FUSOzFsAsoMAAAAASUVORK5CYII="
            },
            {
                name: "Product Name 3",
                price: "30rs",
                description: "black color pencil",
                image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwAgAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBAwIEBQj/xAAwEAABAwMDAwQCAQIHAAAAAAABAAIDBAURBiExEkFRBxNCYRQiMiPwFSQzUnGBwf/EABYBAQEBAAAAAAAAAAAAAAAAAAABA//EABgRAQADAQAAAAAAAAAAAAAAAAABAjER/9oADAMBAAIRAxEAPwC8UREBERAREQEREBERAREQERQv1A1xBpulfT0skbrkWdR6t207Tw94HJPxby4/QJATBs0bpHxte0vZjqaHbtzxkdlsXz16b1V7uusWXGCqmhpQ8mpMh6nVWeevy47fTcADjC+g2Z6RnnCDkiIgIiICIiAiIgIiICHZFCPUTXcGmqaWlpJIzcS0FznDqbTtPBI7uPxb35OBug7+q9SSUchtln9uS5uaDI94zHRsccB7/s/FnLj9AlUxfrILxqSOnoKypq2D9qsy4JNRnDyXDk4xn/b/ABHGB27DerleqH8K1009LUVD3fl1pnL3zZO5zgfu4YBPADQGhva1tF6RprLSRkxt6w0duFNGNEaWis1GwuaOvHhS9YAwsqgiIgIiICIiAiIgIigPqL6gU9ggloqGUGuAAlkA6hT5GwA+UhHDe38nYHIbPUXXlPpymlpKORrrhgdbsdQpweNvk8/Fv/ZwFT1HRT6xrKcRU0jY2udJJLK/qkkkdjqJPfjnk/WwGu0Wir1hcIZDBKxgLjIXSl/W5ziS7J+RGMu7/QwBfek9MUtlpGNbGOvHhTRq0hpWmstK3+m33MDfClI2QIqCIiAiIgIiICIiAiKBa91t/h4mttplDalg/wA1V4y2kB7DzJuNu2QSDkNcGr1I1/FYoJaG2zD80DpmmaA72M8NaOHSkbgcAfs7bANW2y0Tavr4WU8D20UT3OEsgzJK527iXbnc8nO5ye642XT02rbuySKORtFHkAvJJeScuO5OSSd3cuxkq+9N6fprNSMjiYA4DnCmjVpfTdNZaRjI2APA8KQIioIiICIiAiIgIiICLBOFXeu9a+3+Ra7NUe0YgRW1zcH8cd2s8v33PDOTvgIM+omuXW+mrKOy+4+anaBV1UQz7GeGN7e4c99mjc9ga10/YqrV1VG1sL4bWw5DXEl0pJyS49/vyd+SV2dO2Kr1ZURwtbIyzRSEsDtjN+xOT3xk533J3cScYvGxWamtNKyKFjRgAbBTRr0/Y6az0jIoYwCB2C9hEVBERAREQEREBERAWCcITgKpvUz1GZTxy260TO6QTHNUROw57hzHGe2Pk/48DLuA9LXWtg1s1Ba6kwwRO9utuDNxEe8bDx1+T8eP5EBQXTGnqnVtTGDE+GzRP6o4t/6p2/Y53wcZ8+ckknhorS9x1S+mluLGRW+EARwRM6GOAJIJH11Ef2Sb3tVsgttM2KFgAaMcKDhZrTT2umZFAwNwPC9FEVBERAREQEREBERAWCccrKh+u9TT2uKO3WeA1V2qv9KIcMb3e89h/wA9/KDlq67tfDLQQyOa17S2V7XFpAI4BG4KgFr9PqO83iGsEcjaWJoaInHLMDgDwB44Uws+namvcye5gDuWAkjP/qm1LSxU0QZE0NA8LOKzM9lpa1echqt1vhoKdsULA0Adl3ERaMxERAREQEREBERAREQYPC89tppvypKkxNEspBe/G7sDAyfpeiiDi1oaMNGAuSIgIiICIiAiIgIiICIiAiIg/9k="
            },
            {
                name: "Product Name 1",
                price: "20rs",
                description: "white color pencil",
                image: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            },
            {
                name: "Product Name 2",
                price: "40rs",
                description: "red color pencil",
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAABGlBMVEX////MAADDHyW9AADCJCbGHiXOLym3AADPAADtxMTNExvz4eDCGSLFEh/uz8u6AAD38O7RMSXEAADFIyzKJye+FxT79vXQAAjNGSLnvru6AAfkxMPbAADy3NzilJPPODHRbnHRQzzhqanIPjvEP0H06OjZi477+fHy+NLbtZPTiHH8//HOX2HBNTnNJB7XhIbYqZXGXkfgwpju5tzfmpvkyarRgWXl0Kbk3avUjYHftazOZlXId1fETUjOknnOnYPPcWDFd2XapoTMc2zPlofIZWDOp4rMf3nWU0fWnZjOXFTepI3UU1LZa2Tim5Lu4sXfnUzhyXPhrVjRWTbcm1f189vcs1DPi1jizYXkxYfcg0TftGrhMSfZczl0RMPoAAAEFklEQVRogcXbi17iOBgF8N5SMSSAQrexiky5qCCgOCwjsrSIA4MUdYZ19jr7/q+xX3DXRzjJC/x/JzltEi6WZWC0qiZUPUq+fWpIrvGDww8m5FbMDyrMNWCT7PvMYYd1E3KFZEc2wHLJ1zIj2fsJK7fCw7fMQa+ElUv26Z0vtdxsYeVW/+z8ol02IOf7p/lO+7IrZQ8uXxWuB3f1SHrgdW7ZZ+c3g491VwqwnLeHhUG7PnTh3W7Zw48/j47rLr5h9nD/0+3l0IDcPy2MR3cmMqur6qStG4Ze53wlLFz8omX0ezvPud+/sYYub8Bl5VdkuRsFTfRs87f9WQZTtKx2suMFU3C3qxUeJw2hZXRmn9fSdCW8oAluWJVruSfxcj7ktSwtU+YpXo4zWmgv6ILXmWb7oDNrSi+Cy4pme0BysIbLyu+kU4lf5ypX/fukoWUsbFWp28lO7sJlFS9JZtECPdsh7VWzhnTwst6rHCmcQ7hM3d7d6OCZC9Rt5ZDM11hYd7vSWQvHidDdLuSUr+b3shIt0LLutlOWzH3Ar/OuYcz9AJf1U0UNc+GzzXlll9nAOvPa55lgAp85x+M0aTDPfYDLyk9S2qvcL2hZnwAnRmQ69WbLjRFZVeZJ2YzcuN6ts4GGNcYpZS4akFezpc58hpf9wT3JRbR8rPcqSbcbeOb93V7FGL7b++HbLmlE7jP9aUURLufojkHnMM8dwmW1Wo1oryrC5VDxJC0Lx33Ey6snbyq8IlzmqlZb0v0ZL9NsT+6lwL/DjnKKZ9MePc/wzLYKk7mJ2T6yVTwSTSngmY9CVSuna+nsob8GJpm36bzt4Gc7VPF0smbOnoF15p2ES7xct5ViwZQZWGeS9V1SFPEyX8f6m28D3eZPSeKZkdWX+UNP4OUc715PFgIvU7c32eEjNyDnOOedx0hEBrq9mTW6UkRHaDnHn9ad57Io3qFleqpmS71LojPfhSrMFuMy/h1Wt/lT5o6lKKIzkxxfi8zFN4ye51jOHg10m2R+3V4EIjAw2003W0uxdwyX6dSbNKnbeJkalm7K+MyPdDLwZlNqGDwzvT0/L2m2AwPrHK8TeofhM9ucJ5MpZS7g5W4a0DV2Dy1TwxrZ/IELFy0/U+Zm2ozws/1M3R6PIkd4+MxKzdqSmchM9yq5dkSA/tn8c44pxhxhRNYfezoiQsuZzRTd5wzIL6GebIdJDy1fflWaNiBb37a/KgptQL7dbl9jYSLzxW9bsn0Z5NHydy1vt19/B//00bLOv21fNf0JDVvWH7vM2xe8fLvL/Oc5Xn7Zvr4aiWy1/iL57+8GZGv148c/NwYm27KuTsIc+jr3NuonJxv4w7wbhdwJ+vu5/0bJr6HPYP+PzRP4563v4xT+H7r3Ad+m3se/FUSOzFsAsoMAAAAASUVORK5CYII="
            },
            {
                name: "Product Name 3",
                price: "30rs",
                description: "black color pencil",
                image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwAgAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBAwIEBQj/xAAwEAABAwMDAwQCAQIHAAAAAAABAAIDBAURBiExEkFRBxNCYRQiMiPwFSQzUnGBwf/EABYBAQEBAAAAAAAAAAAAAAAAAAABA//EABgRAQADAQAAAAAAAAAAAAAAAAABAjER/9oADAMBAAIRAxEAPwC8UREBERAREQEREBERAREQERQv1A1xBpulfT0skbrkWdR6t207Tw94HJPxby4/QJATBs0bpHxte0vZjqaHbtzxkdlsXz16b1V7uusWXGCqmhpQ8mpMh6nVWeevy47fTcADjC+g2Z6RnnCDkiIgIiICIiAiIgIiICHZFCPUTXcGmqaWlpJIzcS0FznDqbTtPBI7uPxb35OBug7+q9SSUchtln9uS5uaDI94zHRsccB7/s/FnLj9AlUxfrILxqSOnoKypq2D9qsy4JNRnDyXDk4xn/b/ABHGB27DerleqH8K1009LUVD3fl1pnL3zZO5zgfu4YBPADQGhva1tF6RprLSRkxt6w0duFNGNEaWis1GwuaOvHhS9YAwsqgiIgIiICIiAiIgIigPqL6gU9ggloqGUGuAAlkA6hT5GwA+UhHDe38nYHIbPUXXlPpymlpKORrrhgdbsdQpweNvk8/Fv/ZwFT1HRT6xrKcRU0jY2udJJLK/qkkkdjqJPfjnk/WwGu0Wir1hcIZDBKxgLjIXSl/W5ziS7J+RGMu7/QwBfek9MUtlpGNbGOvHhTRq0hpWmstK3+m33MDfClI2QIqCIiAiIgIiICIiAiKBa91t/h4mttplDalg/wA1V4y2kB7DzJuNu2QSDkNcGr1I1/FYoJaG2zD80DpmmaA72M8NaOHSkbgcAfs7bANW2y0Tavr4WU8D20UT3OEsgzJK527iXbnc8nO5ye642XT02rbuySKORtFHkAvJJeScuO5OSSd3cuxkq+9N6fprNSMjiYA4DnCmjVpfTdNZaRjI2APA8KQIioIiICIiAiIgIiICLBOFXeu9a+3+Ra7NUe0YgRW1zcH8cd2s8v33PDOTvgIM+omuXW+mrKOy+4+anaBV1UQz7GeGN7e4c99mjc9ga10/YqrV1VG1sL4bWw5DXEl0pJyS49/vyd+SV2dO2Kr1ZURwtbIyzRSEsDtjN+xOT3xk533J3cScYvGxWamtNKyKFjRgAbBTRr0/Y6az0jIoYwCB2C9hEVBERAREQEREBERAWCcITgKpvUz1GZTxy260TO6QTHNUROw57hzHGe2Pk/48DLuA9LXWtg1s1Ba6kwwRO9utuDNxEe8bDx1+T8eP5EBQXTGnqnVtTGDE+GzRP6o4t/6p2/Y53wcZ8+ckknhorS9x1S+mluLGRW+EARwRM6GOAJIJH11Ef2Sb3tVsgttM2KFgAaMcKDhZrTT2umZFAwNwPC9FEVBERAREQEREBERAWCccrKh+u9TT2uKO3WeA1V2qv9KIcMb3e89h/wA9/KDlq67tfDLQQyOa17S2V7XFpAI4BG4KgFr9PqO83iGsEcjaWJoaInHLMDgDwB44Uws+namvcye5gDuWAkjP/qm1LSxU0QZE0NA8LOKzM9lpa1echqt1vhoKdsULA0Adl3ERaMxERAREQEREBERAREQYPC89tppvypKkxNEspBe/G7sDAyfpeiiDi1oaMNGAuSIgIiICIiAiIgIiICIiAiIg/9k="
            },
            {
                name: "Product Name 4",
                price: "50rs",
                description: "white color pencil",
                image: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            },
            {
                name: "Product Name 4",
                price: "50rs",
                description: "white color pencil",
                image: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            },
            
        ];
        
        localStorage.setItem('products', JSON.stringify(products));
        
        function deleteProduct(index) {
            let showProducts = JSON.parse(localStorage.getItem("products"));
            showProducts.splice(index, 1);
            localStorage.setItem('products', JSON.stringify(showProducts));
            displayProducts();
        }

        function displayProducts() {
            let showProducts = JSON.parse(localStorage.getItem("products"));
            let displayDiv = document.getElementById("display");
            displayDiv.innerHTML = '';

            showProducts.forEach((product, index) => {
                displayDiv.innerHTML += `
                
                    <div class="product" style="padding:25px">
                        <h2>${product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <p>Description: ${product.description}</p>
                        <img src="${product.image}" alt="Product Image">
                        <button id="Dbutton" onclick="deleteProduct(${index})"></button>
                        <button id="Ebutton"></button>
                       
                    </div>
                
                `;
            });
        }

        displayProducts();
        