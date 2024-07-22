import { StyleSheet, Text } from "react-native";

type ListingViewProps = {
    lists: string[];
}

const ListingView = ({lists}: ListingViewProps) => {
    return(
        <>
        {lists.map((list: string, key: number) => (
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