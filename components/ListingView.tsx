import { StyleSheet, Text } from "react-native";

const ListingView = ({lists}: any) => {
    return(
        <>
        {lists.map((list: string, key: string) => (
            <Text style={styles.displayText} key={key}>{list}</Text>
          ))}
        </>
    )
}
const styles = StyleSheet.create({
    displayText: {
        marginTop: 10,
        fontSize: 16,
      },
    });
export default ListingView;