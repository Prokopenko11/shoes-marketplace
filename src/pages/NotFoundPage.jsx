import PageWrapper from '../components/PageWrapper';
import Banner from '../components/Banner';

const NotFoundPage = () => {
  return (
    <PageWrapper>
      <Banner />
      <section className="top-sales">
        <h2 className="text-center">Страница не найдена</h2>
        <p>
          Извините, такая страница не найдена!
        </p>
      </section>
    </PageWrapper>
  )
}

export default NotFoundPage;