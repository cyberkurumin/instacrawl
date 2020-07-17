import Head from 'next/head'
import { useFormik } from 'formik'

export default function Home() {
  const formik = useFormik({
      initialValues: {
          profile: ''
      },
      onSubmit: values => {
          console.log(values)
      }
  })
  return (
      <form onSubmit={ formik.handleSubmit }>
        <div>
            <label htmlFor='profile'>Instagram Profile</label><br />
            <input type='text' name='profile' onChange={ formik.handleChange } value={ formik.values.profile } />
        </div>
        <div>
            <button type='submit' >Launch Research</button>
        </div>
      </form>
  )
}
