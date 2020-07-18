import Head from 'next/head'
import { useFormik } from 'formik'
import Summary from '../components/account/summary'
import PostList from '../components/account/postsList'


const validate = values => {
    const errors = {}
    if (!values.profile) {
        errors.profile = 'This is a required field'
    }

    return errors
}

const Home = () => {

  const formik = useFormik({
      initialValues: {
          profile: ''
      },
      validate,
      onSubmit: values => {
          console.log(values.profile)
      }
  })

  return (
      <div>
          <form onSubmit={ formik.handleSubmit }>
            <div>
                {formik.errors.profile ? <div>{formik.errors.profile}</div> : null}
                <label htmlFor='profile'>Instagram Profile</label><br />
                <input type='text' name='profile' onChange={ formik.handleChange } value={ formik.values.profile } />
            </div>
            <div>
                <button type='submit' >Launch Research</button>
            </div>
          </form>
          <Summary></Summary>
          <PostList></PostList>
      </div>
  )
}

export default Home;
