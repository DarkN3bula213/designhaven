import { CheckCircle } from '@/components/icons/collection/CheckCircle'
import { InfoCircle } from '@/components/icons/collection/InfoCircle'
import Image from 'next/image'

export default function JavaScript() {
  return (
    <div className='relative'>
      {/* side nav */}
      <div className='fixed '>
        <div>
          <div className='flex flex-col items-center justify-center w-80 h-screen bg-white/5 filter backdrop-blur'>
            <ul>
              <li>
                Introduction
              </li>
            </ul>
            <div className='flex flex-col items-center justify-center w-10 h-10 bg-gray-200 rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-800'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </div>
            <div className='flex flex-col items-center justify-center w-10 h-10 mt-5 bg-gray-200 rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-800'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </div>
          </div>
</div>
      </div>
      <div className="px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-brand2 text-base font-semibold leading-7">
            Introducing
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            JavaScript for Beginners
          </h1>
          <p className="mt-6 text-xl leading-8">
            JavaScript is a programming language that adds interactivity to your
            website. This happens in games, in the behavior of responses when
            buttons are pressed or with data entry on forms; with dynamic
            styling; with animation, etc. This article helps you get started
            with JavaScript and furthers your understanding of what is possible.
          </p>
          <div className="mt-10 max-w-2xl">
            <p>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit. Faucibus commodo massa rhoncus, volutpat.
              Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
              sed turpis id.
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CheckCircle
                  className="text-brand2 mt-1 h-5 w-5 flex-none"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Data types.
                  </strong>{' '}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircle
                  className="text-brand2 mt-1 h-5 w-5 flex-none"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Loops.
                  </strong>{' '}
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircle
                  className="text-brand2 mt-1 h-5 w-5 flex-none"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Events.
                  </strong>{' '}
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </span>
              </li>
            </ul>
            <p className="mt-8">
              Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
              odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
              diam tincidunt ac cursus in vel. Mauris varius vulputate et
              ultrices hac adipiscing egestas. Iaculis convallis ac tempor et
              ut. Ac lorem vel integer orci.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              From beginner to expert in 3 hours
            </h2>
            <p className="mt-6">
              Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
              consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
              vitae interdum mauris enim, consequat vulputate nibh. Maecenas
              pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim
              cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
              ipsum eu a sed convallis diam.
            </p>
            <figure className="border-bratext-brand2 mt-10 border-l pl-9">
              <blockquote className="font-semibold text-gray-900">
                <p>
                  “Vel ultricies morbi odio facilisi ultrices accumsan donec
                  lacus purus. Lectus nibh ullamcorper ac dictum justo in
                  euismod. Risus aenean ut elit massa. In amet aliquet eget
                  cras. Sem volutpat enim tristique.”
                </p>
              </blockquote>
              <figcaption className="mt-6 flex gap-x-4">
                <Image
                  height={40}
                  width={40}
                  className="h-6 w-6 flex-none rounded-full bg-gray-50"
                  src="/javascript.svg"
                  alt=""
                />
                <div className="text-sm leading-6">
                  <strong className="font-semibold text-gray-900">
                    Maria Hill
                  </strong>{' '}
                  – Marketing Manager
                </div>
              </figcaption>
            </figure>
            <p className="mt-10">
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p>
          </div>
          <figure className="mt-16">
            <Image
              height={500}
              width={800}
              className="aspect-video rounded-xl bg-gray-50 object-cover"
              src="/javascript.svg"
              alt=""
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              <InfoCircle
                className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                aria-hidden="true"
              />
              Faucibus commodo massa rhoncus, volutpat.
            </figcaption>
          </figure>
          <div className="mt-16 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Everything you need to get up and running
            </h2>
            <p className="mt-6">
              Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam
              varius orci dapibus volutpat cras. In amet eu ridiculus leo
              sodales cursus tristique. Tincidunt sed tempus ut viverra
              ridiculus non molestie. Gravida quis fringilla amet eget dui
              tempor dignissim. Facilisis auctor venenatis varius nunc, congue
              erat ac. Cras fermentum convallis quam.
            </p>
            <p className="mt-8">
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
