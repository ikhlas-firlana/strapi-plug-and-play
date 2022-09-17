import {
  Card,
  CardHeader,
  CardBody,
  CardCheckbox,
  CardAction,
  CardAsset,
  CardTimer,
  CardContent,
  CardBadge,
  CardTitle,
  CardSubtitle,
} from '@strapi/design-system/Card';

const Container = () => {
  const firstImgPath = 'https://via.placeholder.com/150x150';
  return (
    <>
      <Card style={{
        width: '240px'
      }} id="first">
        <CardHeader>
          <CardCheckbox value={true} />
          <CardAction position="end">
            <IconButton label="Edit the thing" icon={<Pencil />} />
          </CardAction>
          <CardAsset src={firstImgPath} />
          <CardTimer>05:39</CardTimer>
        </CardHeader>
        <CardBody>
          <CardContent>
            <CardTitle>File name fezof hzoeah fohzeofhozaehfohzeoafhzoaehfohzaeo fhozahf ozaehfoa</CardTitle>
            <CardSubtitle>PNG - 400✕400</CardSubtitle>
          </CardContent>
          <CardBadge>Doc</CardBadge>
        </CardBody>
      </Card>
    </>
  )
}

export default Container;
